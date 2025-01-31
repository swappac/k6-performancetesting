import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up to 20 users over 30 seconds
    { duration: '1m', target: 20 },  // Stay at 20 users for 1 minute
    { duration: '10s', target: 0 },  // Ramp-down to 0 users over 10 seconds
  ],
};

export default function () {
  let res = http.get('https://test-api.example.com');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 200ms': (r) => r.timings.duration < 200,
  });
  sleep(1);
}
