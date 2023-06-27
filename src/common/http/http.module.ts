import { HttpModule as AxiosHttpModule, HttpService }    from "@nestjs/axios";
import { Global, HttpException, Module, OnModuleInit }   from "@nestjs/common";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";



@Global()
@Module({
  imports: [ AxiosHttpModule ],
  exports: [ AxiosHttpModule ]
})
export class HttpModule extends AxiosHttpModule implements OnModuleInit {

  constructor( private readonly httpService: HttpService ) {
    super();
  }

  public async onModuleInit(): Promise<void> {
    const axios = this.httpService.axiosRef;
    // axios.interceptors.request.use(function (config: AxiosRequestConfig): any {
    //
    // });

    axios.interceptors.response.use(function( response: AxiosResponse ) {
      return response;
    }, function( error: AxiosError ) {
      throw new HttpException("Axios Error", error.response.status);
    });
  }
}