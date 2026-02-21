const fs = require('fs');

describe('HW01 – alapvető ellenőrzések', () => {
  test('student directory exists', () => {
    expect(fs.existsSync('./student')).toBe(true);
  });

  test('.gitignore exists', () => {
    expect(fs.existsSync('./.gitignore')).toBe(true);
  });
});
