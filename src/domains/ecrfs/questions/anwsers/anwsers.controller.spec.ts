import { Test, TestingModule } from "@nestjs/testing";
import { AnwsersController }   from "./anwsers.controller";
import { AnwsersService }      from "./anwsers.service";



describe( "AnwsersController", () => {
    let controller: AnwsersController;
    
    beforeEach( async () => {
        const module: TestingModule = await Test.createTestingModule( {
            controllers: [ AnwsersController ],
            providers  : [ AnwsersService ]
        } )
                                                .compile();
        
        controller = module.get<AnwsersController>( AnwsersController );
    } );
    
    it( "should be defined", () => {
        expect( controller )
          .toBeDefined();
    } );
} );
