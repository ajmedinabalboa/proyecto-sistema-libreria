'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('marcas', [
            { nombre_marca: 'Faber-Castell', createdAt: new Date(), updatedAt: new Date() },
            { nombre_marca: 'PrismaColor', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('marcas', null, {});
    }
};
