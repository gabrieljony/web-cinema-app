import { VideoPipe } from './video.pipe';

describe('VideoPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoPipe();
    expect(pipe).toBeTruthy();
  });
});
