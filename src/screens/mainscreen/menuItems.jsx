import { faBars, faClipboard, faClipboardCheck, faDollarSign, faDumbbell, faFileCirclePlus, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuItem = () => (
  <div className="menu-item">
    <div
      className="menu-card-item"
      style={{
        marginRight: '5px',
      }}
    >
      <div className="menu-item-text">
        <FontAwesomeIcon size="1x" icon={faDumbbell} /> Treinos
      </div>
    </div>
    <div className="menu-card-item">
      <div className="menu-item-text">
        <FontAwesomeIcon size="1x" icon={faFileCirclePlus} /> Treinos extras
      </div>
    </div>
    <div
      className="menu-card-item"
      style={{
        marginRight: '5px',
        marginTop: '5px',
      }}
    >
      <div className="menu-item-text">
        <FontAwesomeIcon size="1x" icon={faClipboard} /> Avaliações
      </div>
    </div>
    <div
      className="menu-card-item"
      style={{
        marginTop: '5px',
      }}
    >
      <div className="menu-item-text">
        <FontAwesomeIcon size="1x" icon={faClipboardCheck} /> Meu progresso
      </div>
    </div>
    <div
      className="menu-card-item"
      style={{
        marginRight: '5px',
        marginTop: '5px',
      }}
    >
      <div className="menu-item-text">
        <FontAwesomeIcon size="1x" icon={faDollarSign} /> Fatura
      </div>
    </div>
    <div
      className="menu-card-item"
      style={{
        marginTop: '5px',
      }}
    >
      <div className="menu-item-text">
        <FontAwesomeIcon size="1x" icon={faFolder} /> Arquivos
      </div>
    </div>
  </div>
)