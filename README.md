# Prometheus Monitoring NodeJS Basic Test

### Start the NodeJS server

Run `npm install` and `npm start` to start the Prometheus-enabled Node.js server.

Visit http://localhost:3009 and then http://localhost:3009/metrics to verify is working.


### Start Prometheus server

Run the following command:

```bash
docker run -p 9090:9090 -v "$(pwd)/prometheus":/etc/prometheus prom/prometheus
```

Now visit http://localhost:9090/ to see your Prometheus server running.

If you start typing "http" in the **Expression** text box, it should auto-complete to options lile http_request_duration_seconds_bucket, those are metrics coming from NodeJS!