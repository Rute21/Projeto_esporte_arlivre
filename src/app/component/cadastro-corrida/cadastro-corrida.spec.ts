import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroCorrida } from './cadastro-corrida';
import { CorridaService } from '../../service/corrida/corrida-service';
import { of, throwError } from 'rxjs';

describe('CadastroCorrida', () => {
  let component: CadastroCorrida;
  let fixture: ComponentFixture<CadastroCorrida>;

  let corridaServiceMock: any;

  beforeEach(async () => {

    corridaServiceMock = {
      salvarCorrida: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [CadastroCorrida],
      providers: [
        {
          provide: CorridaService,
          useValue: corridaServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroCorrida);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o serviço para salvar a corrida', () => {

    corridaServiceMock.salvarCorrida.mockReturnValue(
      of(component.corrida)
    );

    component.salvar();

    expect(corridaServiceMock.salvarCorrida)
      .toHaveBeenCalledWith(component.corrida);
  });

  it('deve limpar o formulário depois de salvar a corrida', () => {

    corridaServiceMock.salvarCorrida.mockReturnValue(
      of(component.corrida)
    );

    component.corrida.descricao_corrida = 'Corrida de Verão';

    component.salvar();

    expect(component.corrida.descricao_corrida).toBe('');
  });

  it('deve mostrar mensagem de erro quando não conseguir salvar', () => {

    corridaServiceMock.salvarCorrida.mockReturnValue(
      throwError(() => new Error('Erro ao salvar'))
    );

    vi.spyOn(window, 'alert');

    component.salvar();

    expect(window.alert)
      .toHaveBeenCalledWith('Erro ao cadastrar corrida. Veja o console.');
  });

});