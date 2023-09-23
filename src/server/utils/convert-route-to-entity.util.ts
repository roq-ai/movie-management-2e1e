const mapping: Record<string, string> = {
  actors: 'actor',
  companies: 'company',
  directors: 'director',
  movies: 'movie',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
