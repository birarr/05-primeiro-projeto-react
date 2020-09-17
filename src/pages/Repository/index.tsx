import React from 'react';
import { useRouteMatch, Link}  from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
    <Header>
      <img src={logoImg} alt="Github Explorer"/>
      <Link to="/">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src="https://avatars2.githubusercontent.com/u/38991074?s=460&u=d4c19763761b5948f944ad80a02b6d9646f12757&v=4" alt="Ubiratan Rodrigues"/>
        <div>
          <strong>birarr/proffy</strong>
          <p>Descrição do repositório</p>
        </div>
      </header>
      <ul>
        <li>
        <strong>1808</strong>
        <span>start</span>
        </li>
        <li>
        <strong>48 </strong>
        <span>Forks</span>
        </li>
        <li>
        <strong>67</strong>
        <span>Issues</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
    <Link  to="dkfgljdsfkl">
        <div>
          <strong>teste</strong>
          <p>teste</p>
        </div>
        <FiChevronRight size={20}/>
      </Link>

    </Issues>
    </>
  )
}

export default Repository;