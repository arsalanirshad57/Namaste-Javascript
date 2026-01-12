// Task 1: Group users by country

const users = [
  { name: 'Ali', country: 'Pakistan' },
  { name: 'John', country: 'USA' },
  { name: 'Sara', country: 'Pakistan' },
  { name: 'Emma', country: 'UK' },
];

// output:

// {
//   Pakistan: ['Ali', 'Sara'],
//   USA: ['John'],
//   UK: ['Emma']
// }

// Solution:

const fallback = {};

const usersByCountry = users.reduce((_groupBy, user) => {
  const { country, name } = user;

  if (!country) return fallback;

  _groupBy[country] = _groupBy[country] || [];
  _groupBy[country].push(name);

  return _groupBy;
}, fallback);

console.log('usersByCountry:', usersByCountry);

// Task 2: Calculate total and average salary

const employees = [
  { name: 'Ali', salary: 50000 },
  { name: 'Sara', salary: 60000 },
  { name: 'John', salary: 70000 },
];

// output:
// { total: 180000, average: 60000 }

// Solution:

const employeesFallback = { total: null, average: null };

const results = employees.reduce((_groupBy, employee) => {
  const { salary } = employee;
  if (!salary) return employeesFallback;

  _groupBy.total += salary;

  return D;
}, employeesFallback);

const average = results.total / employees.length;

console.log('total:', results.total);
console.log('average:', average);
