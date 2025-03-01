export async function prepareMocks(isDevelopment: boolean): Promise<void> {
  if (!isDevelopment) return;

  const { worker } = await import('@/lib/mocks/browser');
  worker.start({ onUnhandledRequest: 'bypass' });
}
