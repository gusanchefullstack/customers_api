const organizationService = require("../services/organizationService");

const getAllOrgs = async (req, res, next) => {
  try {
    const allOrgs = await organizationService.getAllOrgs();
    res
      .status(200)
      .json({ status: "OK", data: allOrgs, items: allOrgs.length });
  } catch (error) {
    next(error);
  }
};

const getUniqueOrg = async (req, res, next) => {
  const {
    params: { orgId },
  } = req;
  try {
    const org = await organizationService.getOneOrg(orgId);
    res.status(200).json({ status: "OK", data: org });
  } catch (error) {
    next(error);
  }
};

const createNewOrg = async (req, res, next) => {
  const { body } = req;
  const newOrg = {
    ...body,
  };
  try {
    const createdOrg = await organizationService.createNewOrg(newOrg);
    res.status(201).json({ status: "Created", data: createdOrg });
  } catch (error) {
    next(error);
  }
};

const updateUniqueOrg = async (req, res, next) => {
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
    next(error);
  }
};

const deleteUniqueOrg = async (req, res, next) => {
  const {
    params: { orgId },
  } = req;
  try {
    const deletedOrg = await organizationService.deleteOrg(orgId);
    res.status(200).json({ status: "Deleted", data: deletedOrg });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllOrgs,
  createNewOrg,
  getUniqueOrg,
  updateUniqueOrg,
  deleteUniqueOrg,
};
