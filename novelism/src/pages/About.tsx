import junkyulee from "../resources/Images/junkyu.png";
import seungminryu from "../resources/Images/seungmin.png";
import seongkyupark from "../resources/Images/seongkyu.png";
import daehyunkwon from "../resources/Images/daehyun.png";
import hyunwookim from "../resources/Images/hyunwoo.png";
import { AboutLayout, ItemLayout, Item } from "../styles/About/AboutStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface TeamOne {
  name: string;
  img: string;
  role: string;
  github: string;
}

const junkyu: TeamOne = {
  name: "이준규",
  img: junkyulee,
  role: "Frontend",
  github: "https://github.com/Jun99uu",
};

const seungmin: TeamOne = {
  name: "유승민",
  img: seungminryu,
  role: "Backend",
  github: "https://github.com/99winnmin",
};

const seongkyu: TeamOne = {
  name: "박성규",
  img: seongkyupark,
  role: "NLP",
  github: "https://github.com/parksk99",
};

const daehyun: TeamOne = {
  name: "권대현",
  img: daehyunkwon,
  role: "NLP",
  github: "https://github.com/neoskyclad",
};

const hyunwoo: TeamOne = {
  name: "김현우",
  img: hyunwookim,
  role: "NLP",
  github: "https://github.com/qualificationalitated",
};

const Development: Array<TeamOne> = [junkyu, seungmin];
const MachineLearning: Array<TeamOne> = [seongkyu, daehyun, hyunwoo];

export default function About() {
  return (
    <AboutLayout>
      <div className="title-box">
        <span className="title">안녕하세요, Novelism Team 입니다!</span>
        <span className="subtitle">
          사용자의 즐거운 경험을 위해 끊임없이 노력합니다.
        </span>
      </div>
      <ItemLayout>
        {Development.map((team, index) => (
          <Item key={team.name}>
            <div className="img-box">
              <div className="back-box" />
              <img src={team.img} />
            </div>
            <span className="name">{team.name}</span>
            <a href={team.github} target="_blank" className="role">
              {team.role}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Item>
        ))}
      </ItemLayout>
      <ItemLayout>
        {MachineLearning.map((team, index) => (
          <Item key={team.name}>
            <div className="img-box">
              <div className="back-box" />
              <img src={team.img} />
            </div>
            <span className="name">{team.name}</span>
            <a href={team.github} target="_blank" className="role">
              {team.role}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Item>
        ))}
      </ItemLayout>
    </AboutLayout>
  );
}
