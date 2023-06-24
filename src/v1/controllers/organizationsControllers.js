const organizationService = require("../services/organizationService");

const getAllOrgs = async (req, res) => {
  try {
    const allOrgs = await organizationService.getAllOrgs();
    res
      .status(200)
      .json({ status: "OK", data: allOrgs, items: allOrgs.length });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({
        status: error?.status || "500",
        message: error?.message || error,
      });
  }
};

const getUniqueOrg = async (req, res) => {
  const {
    params: { orgId },
  } = req;
  try {
    const org = await organizationService.getOneOrg(orgId);
    res.status(200).json({ status: "OK", data: org });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: error?.status || "500",
      message: error?.message || error,
    });
  }
};

const createNewOrg = async (req, res) => {
  const { body } = req;
  const newOrg = {
    ...body,
  };
  try {
    const createdOrg = await organizationService.createNewOrg(newOrg);
    res.status(201).json({ status: "Created", data: createdOrg });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: error?.status || "500",
      message: error?.message || error,
    });
  }
};

const updateUniqueOrg = async (req, res) => {
  const {
    params: { orgId },
    body,
  } = req;
  const changes = {
    name: body.name,
    nit: body.nit,
    address: body.address,
    city: body.city,
    state: body.state,
    country: body.country,
  };
  try {
    const updatedOrg = await organizationService.updateOneOrg(orgId, changes);
    res.status(200).json({ status: "Updated", data: updatedOrg });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: error?.status || "500",
      message: error?.message || error,
    });
  }
};

const deleteUniqueOrg = async (req, res) => {
  const {
    params: { orgId },
  } = req;
  try {
    const deletedOrg = await organizationService.deleteOrg(orgId);
    res.status(200).json({ status: "Deleted", data: deletedOrg });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: error?.status || "500",
      message: error?.message || error,
    });
  }
};

module.exports = {
  getAllOrgs,
  createNewOrg,
  getUniqueOrg,
  updateUniqueOrg,
  deleteUniqueOrg,
};
