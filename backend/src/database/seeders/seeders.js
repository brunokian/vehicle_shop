const MotoODM = require('../schemas/MotoODM')

const seedData = [
    { model: 'CG 160', manufacturer: 'Honda', buyValue: 10520, type: 'street' },
    { model: 'NXR 160', manufacturer: 'Honda', buyValue: 14600, type: 'street' }
]

const seedMotos = async () => {
  try {
    await MotoODM.deleteMany({});
    const motos = await MotoODM.create(seedData);
    console.log(`${motos.length} motos adicionadas com sucesso`);
  } catch (error) {
    console.error(error);
  }
};


seedMotos()
