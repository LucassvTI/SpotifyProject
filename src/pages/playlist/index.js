import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="http://concentracaosertaneja.com.br/wp-content/uploads/2017/02/CD-Wesley-Safad%C3%A3o-Promocional-2017.1.jpg"
        alt="Wesley Safadão"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Wesley Sertanejo</h1>
        <p>7 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellSpacing={0} cellPadding={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />{" "}
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Só Para Castigar</td>
          <td>Wesley Safadao</td>
          <td>WS Mais Uma Vez</td>
          <td>2:46</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
