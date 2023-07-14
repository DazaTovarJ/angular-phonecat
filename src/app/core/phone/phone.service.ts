import { resource } from 'angular';

Phone.$inject = ['$resource'];
export function Phone($resource: resource.IResourceService) {
  return $resource(
    'phones/:phoneId.json',
    {},
    {
      query: {
        method: 'GET',
        params: { phoneId: 'phones' },
        isArray: true,
      },
    }
  );
}
