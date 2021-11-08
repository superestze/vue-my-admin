/*
 * @description  : Do not edit
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  roles: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'pref',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    'subject-case': [0]
  }
}
