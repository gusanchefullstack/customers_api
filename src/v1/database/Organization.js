const prisma = require("./dbconnection");

const getAllOrgs = async () => {
  try {
    const allOrgs = await prisma.organization.findMany();
    if (allOrgs.length === 0) {
      throw { status: 404, message: "No matching records found." };
    }
    return allOrgs;
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

const getUniqueOrg = async (orgId) => {
  try {
    const org = await prisma.organization.findUnique({
      where: {
        id: orgId,
      },
    });
    if (!org) {
      throw { status: 404, message: "No matching records found." };
    }
    return org;
  } catch (error) {
    throw { status: error?.status || 404, message: error?.message || error };
  }
};

const createOrg = async (org) => {
  try {
    const createdOrg = await prisma.organization.create({
      data: {
        ...org,
      },
    });
    return createdOrg;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateUniqueOrg = async (orgId, changes) => {
  try {
    const updatedOrg = await prisma.organization.update({
      where: {
        id: orgId,
      },
      data: {
        ...changes,
      },
    });
    return updatedOrg;
  } catch (error) {
    throw {
      status: error?.status || 404,
      message: "No matching record found.",
    };
  }
};

const deleteOrg = async (orgId) => {
  try {
    const deletedOrg = await prisma.organization.delete({
      where: {
        id: orgId,
      },
    });
    return deletedOrg;
  } catch (error) {
    throw {
      status: error?.status || 404,
      message: "No matching record found.",
    };
  }
};

module.exports = {
  getAllOrgs,
  getUniqueOrg,
  createOrg,
  updateUniqueOrg,
  deleteOrg,
};
