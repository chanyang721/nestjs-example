import { Test, TestingModule } from "@nestjs/testing";
import { ProbandsService }     from "./probands.service";



describe( "ProbandsService", () => {
    let service: ProbandsService;
    
    beforeEach( async () => {
        const module: TestingModule = await Test.createTestingModule( {
            providers: [ ProbandsService ]
        } )
                                                .compile();
        
        service = module.get<ProbandsService>( ProbandsService );
    } );
    
    it( "should be defined", () => {
        expect( service )
          .toBeDefined();
    } );
} );
