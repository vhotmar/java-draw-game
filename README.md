### Using Hazelcast
Sample `docker-compose.yml` provided. Hazelcast management center will start on
`http://localhost:8090/`. Provide `hazelcast-member` as member address.

### Server

#### Design decisions
- State that should be available to all clients should be "persisted" in
  hazelcast. Other state can be kept in Client instance.