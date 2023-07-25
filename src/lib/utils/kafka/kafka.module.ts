// import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
// import { KafkaService }                            from "./kafka.service";
// import { KafkaConfig }                             from "./interface/kafka.payload.interface";
//
//
//
// @Global()
// @Module({})
// export class KafkaModule {
//   public static register( kafkaConfig: KafkaConfig ): DynamicModule {
//     console.log("KafkaModule.register", kafkaConfig);
//     const providers: Provider[] = [
//       {
//         provide : KafkaService,
//         useValue: new KafkaService(kafkaConfig)
//       }
//     ];
//
//
//     return {
//       global   : true,
//       exports  : providers,
//       providers: providers,
//       module   : KafkaModule
//     };
//   }
// }




