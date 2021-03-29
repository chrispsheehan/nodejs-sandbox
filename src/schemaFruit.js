module.exports = {
    title: 'fresh fruit schema v1',
    type: 'array',
    required: ['skin', 'colors', 'taste'],
    properties: {
      colors: {
        type: 'array',
        minItems: 1,
        uniqueItems: true,
        items: {
          type: 'string'
        }
      },
      skin: {
        type: 'string'
      },
      taste: {
        type: 'number',
        minimum: 5
      }
    }
};