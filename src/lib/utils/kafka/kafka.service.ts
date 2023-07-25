// import { Consumer, Kafka, Partitioners, Producer }       from "kafkajs";
// import { Injectable, OnModuleDestroy, OnModuleInit }     from "@nestjs/common";
// import { SUBSCRIBER_FN_REF_MAP, SUBSCRIBER_OBJ_REF_MAP } from "../decoretors";
// import { KafkaConfig }                                   from "./interface/kafka.payload.interface";
//
//
//
// @Injectable()
// export class KafkaService implements OnModuleInit, OnModuleDestroy {
//   private readonly kafkaClient: Kafka;
//
//   private readonly producer: Producer;
//
//   private readonly consumer: Consumer;
//
//
//   constructor( private readonly kafkaConfig: KafkaConfig ) {
//     this.kafkaClient = new Kafka({
//       clientId: this.kafkaConfig.clientId,
//       brokers : this.kafkaConfig.brokers
//     });
//
//     this.producer = this.kafkaClient.producer({
//       allowAutoTopicCreation: true,
//       createPartitioner     : Partitioners.DefaultPartitioner
//     });
//
//     this.consumer = this.kafkaClient.consumer({
//       allowAutoTopicCreation: true,
//       groupId               : this.kafkaConfig.groupId
//     });
//   }
//
//   public async onModuleInit(): Promise<void> {
//     await this.connect();
//
//     SUBSCRIBER_FN_REF_MAP.forEach(( functionRef, topic ) => {
//       console.log("Subscribe", topic);
//       this.bindAllTopicToConsumer(functionRef, topic);
//     });
//
//     await this.consumer.run({
//       eachMessage: async( {
//         topic,
//         partition,
//         message
//       } ) => {
//         const functionRef = SUBSCRIBER_FN_REF_MAP.get(topic);
//         const object = SUBSCRIBER_OBJ_REF_MAP.get(topic);
//         await functionRef.apply(object, [ message.value.toString() ]);
//       }
//     });
//   }
//
//
//   public async onModuleDestroy(): Promise<void> {
//     await this.disconnect();
//   }
//
//
//   async connect() {
//     await this.producer.connect();
//     await this.consumer.connect();
//   }
//
//
//   async disconnect() {
//     await this.producer.disconnect();
//     await this.consumer.disconnect();
//   }
//
//
//   async sendMessage( kafkaTopic: string, kafkaMessage ) {
//     await this.producer.connect();
//
//     const metadata = await this.producer
//                                .send({
//                                  topic   : kafkaTopic,
//                                  messages: [ { value: JSON.stringify(kafkaMessage) } ]
//                                })
//                                .catch(( e ) => console.error(e.message, e));
//
//     await this.producer.disconnect();
//
//     return metadata;
//   }
//
//
//   async bindAllTopicToConsumer( callback, topic ) {
//     await this.consumer.subscribe({
//       topic        : topic,
//       fromBeginning: false
//     });
//   }
// }
