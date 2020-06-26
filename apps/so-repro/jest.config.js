module.exports = {
  name: 'so-repro',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/so-repro',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
