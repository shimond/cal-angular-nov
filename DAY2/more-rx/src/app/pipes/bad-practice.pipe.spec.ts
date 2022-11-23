import { BadPracticePipe } from './bad-practice.pipe';

describe('BadPracticePipe', () => {
  it('create an instance', () => {
    const pipe = new BadPracticePipe();
    expect(pipe).toBeTruthy();
  });
});
