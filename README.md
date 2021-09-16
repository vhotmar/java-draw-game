# Java - final project

## Getting started
You need to run `./gradlew build`. Then you need to have Hazelcast member with
correct class path running. That can be done via running `docker-compose up -d`.

### Design decisions
- State that should be available to all clients should be "persisted" in
  hazelcast. Other state can be kept in Client instance.