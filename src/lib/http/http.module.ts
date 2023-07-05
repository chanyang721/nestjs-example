import { HttpModule as AxiosHttpModule, HttpService }          from "@nestjs/axios";
import { Global, HttpException, Logger, Module, OnModuleInit } from "@nestjs/common";
import { AxiosError, AxiosRequestConfig, AxiosResponse }       from "axios";



@Global()
@Module({
  imports: [ AxiosHttpModule ],
  exports: [ AxiosHttpModule ]
})
export class HttpModule extends AxiosHttpModule implements OnModuleInit {
  private readonly logger = new Logger(HttpModule.name)

  constructor(
    private readonly httpService: HttpService
  ) {
    super();
  }

  public async onModuleInit(): Promise<void> {
    const axios = this.httpService.axiosRef;
    axios.interceptors.request.use(function (config: AxiosRequestConfig): any {
        console.log("axios.interceptors.request.use :", config)
    });

    axios.interceptors.response.use(function( response: AxiosResponse ) {
      return response;
    }, function( error: AxiosError ) {
      /**
       *  TODO: Exception 종류 HttpException OR Custom Exception 으로 변경
       */
      throw new HttpException("Axios Error", error.response.status);
    });
  }
}