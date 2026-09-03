import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorridaListaComponent } from './corrida-lista-component';
import { CorridaService } from '../../service/corrida/corrida-service';
import { of } from 'rxjs';


//DESCRIBE É O GRUPO DOS TESTES
describe('CorridaListaComponent', () => {
  let component: CorridaListaComponent;
  let fixture: ComponentFixture<CorridaListaComponent>;

  let corridaServiceMock: any;

  const corridasMock = [
    {
      id: 1,
      descricao_corrida: 'Corrida de Verão',
      data_corrida: '2026-08-30',
      distancia5km: true,
      distancia10km: false,
      distancia25km: false
    },
    {
      id: 2,
      descricao_corrida: 'Corrida Ar Livre',
      data_corrida: '2026-09-10',
      distancia5km: false,
      distancia10km: true,
      distancia25km: true
    }
  ];
  //BEFOREACH SERVE PARA PREPARAR O AMBIENTE ANTES DE CADA TESTE
  beforeEach(async () => {

    corridaServiceMock = {
      listarCorridas: vi.fn(),
      excluirCorrida: vi.fn()
    };

    corridaServiceMock.listarCorridas.mockReturnValue(
      of(corridasMock)
    );

    await TestBed.configureTestingModule({
      imports: [CorridaListaComponent],
      providers: [
        {
          provide: CorridaService,
          useValue: corridaServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaListaComponent);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  // IT SERVE PARA DEFINIR O QUE SERÁ TESTADO
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve listar as corridas', () => {

    component.listar();

    //EXPECT SERVE PARA VERIFICAR SE PO RESULTADO ESTÁ CORRETO
    expect(component.listaCorridas().length).toBe(2);
  });

  it('deve mostrar mensagem ao se inscrever em uma corrida', () => {

    vi.spyOn(window, 'alert');

    const corrida = corridasMock[0];

    component.inscrever(corrida);

    expect(window.alert).toHaveBeenCalledWith(
      'Você selecionou a corrida: Corrida de Verão'
    );
  });

  it('deve excluir uma corrida quando confirmar', () => {

    vi.spyOn(window, 'confirm').mockReturnValue(true);
    vi.spyOn(window, 'alert');

    corridaServiceMock.excluirCorrida.mockReturnValue(
      of({})
    );

    const corrida = corridasMock[0];

    component.excluir(corrida);

    expect(corridaServiceMock.excluirCorrida)
      .toHaveBeenCalledWith(1);

    expect(window.alert)
      .toHaveBeenCalledWith('Corrida excluída com sucesso!');
  });

  it('não deve excluir a corrida quando cancelar', () => {

    vi.spyOn(window, 'confirm').mockReturnValue(false);

    const corrida = corridasMock[0];

    component.excluir(corrida);

    expect(corridaServiceMock.excluirCorrida)
      .not.toHaveBeenCalled();
  });

});
