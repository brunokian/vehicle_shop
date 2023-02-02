const MotoODM = require('../schemas/MotoODM')

const seedData = [
    { model: 'CG 160', manufacturer: 'Honda', buyValue: 10520, type: 'street' },
    { model: 'NXR 160', manufacturer: 'Honda', buyValue: 14600, type: 'street' }
]

const seedMotos = async () => {
  MotoODM.deleteMany({})
  .then(() => {
    MotoODM.create(seedData)
      .then(motos => console.log(`${motos.length} motos adicionadas com sucesso`))
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));
};

seedMotos()
