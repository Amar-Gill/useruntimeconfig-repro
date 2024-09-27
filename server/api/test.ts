export default defineEventHandler((event) => {
  const { backendTest } = useRuntimeConfig(event);

  return backendTest;
});
