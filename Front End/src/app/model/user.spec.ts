import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1, "Tony", "Stark", "Tony1")).toBeTruthy();
  });
});
