const prisma = require("./dbconnection");
const boom = require("@hapi/boom");

const getAllOrgs = async () => {
  try {
    const allOrgs = await prisma.organization.findMany();
    if (allOrgs.length === 0) {
      throw boom.notFound();
    }
    return allOrgs;
  } catch (error) {
    throw boom.notFound(error.message);
  }
};

const getUniqueOrg = async (orgId) => {
  try {
    const org = await prisma.organization.findUniqueOrThrow({
      where: {
        id: orgId,
      },
    });
    return org;
  } catch (error) {
    throw boom.notFound(error.message);
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
    throw boom.badGateway(error.message);
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
    throw boom.notFound();
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
    throw boom.notFound();
  }
};

module.exports = {
  getAllOrgs,
  getUniqueOrg,
  createOrg,
  updateUniqueOrg,
  deleteOrg,
};
