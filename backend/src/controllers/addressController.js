import Address from '../models/Address.js';

export const getAddresses = async (req, res) => {
  try {
    const { userId } = req;
    const addresses = await Address.find({ userId })
      .sort({ createdAt: -1 });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAddressById = async (req, res) => {
  try {
    const address = await Address.findOne({
      _id: req.params.id,
      userId: req.userId
    });
    
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }
    
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAddress = async (req, res) => {
  try {
    const { houseNo, area, type, location, isFavorite } = req.body;
    
    if (!houseNo || !area || !location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newAddress = new Address({
      userId: req.userId,
      houseNo,
      area,
      type,
      location,
      isFavorite
    });

    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { houseNo, area, type, location, isFavorite } = req.body;
    
    const address = await Address.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }

    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      {
        houseNo,
        area,
        type,
        location,
        isFavorite
      },
      { new: true }
    );

    res.json(updatedAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }

    await Address.findByIdAndDelete(req.params.id);
    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
