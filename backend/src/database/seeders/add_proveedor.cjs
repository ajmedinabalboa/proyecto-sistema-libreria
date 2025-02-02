'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('proveedor', [
            { nombre_proveedor: 'La Papelera S.R.L.', createdAt: new Date(), updatedAt: new Date() },
            { nombre_proveedor: 'Import. Export. La Selva', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('proveedor', null, {});
    }
};
