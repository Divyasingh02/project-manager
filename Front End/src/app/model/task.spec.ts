import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task(1, 1, "Finish Core Java", "FSE", 1, new Date(), new Date(), "N")).toBeTruthy();
  });
});
