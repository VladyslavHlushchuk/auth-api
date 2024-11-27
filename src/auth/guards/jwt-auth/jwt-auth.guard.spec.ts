import { JwtAuthGuard } from './jwt-auth.guard';

describe('LwtAuthGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });
});
