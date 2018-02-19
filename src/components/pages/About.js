import React from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" className={classes.grid}>
        <Grid item sm={8}>
          <Typography paragraph type="title">
            Sobre as decisões e ferramentas do projeto
          </Typography>
          <Typography paragraph type="subheading">
            A stack utilizada foi: ReactJS v16, redux (controle de estado da
            aplicação) e{" "}
            <a href="http://material-ui-next.com/">material-ui-next</a>, as
            demais libs são apenas para complementar essas três principais.
          </Typography>
          <Typography paragraph type="subheading">
            Sobre o design, o projeto consistia um uma listagem de dados de uma
            API e exibição de algumas informações dos itens, tomei a liberdade
            de adicionar a informação da "nota" do filme para ajudar a
            complementar o layout pensado. Falando propriamente do layout,
            escolhi fazer o grid em 2x devido a quantidade de informações em
            cada campo e assim evitar o choque de muitas informações visiseis ao
            mesmo instante, isso tambem teve impacto no collapse que foi
            adicionado dentro dos cards, de modo que quem está pelo celular tem
            a navegação mais rápida pela listagem, ja que os cards irão ocupar
            menos espaço da tela. Alem disso, tambem adicionei um campo para a
            filtragem dos filmes. Considerações: Como eu só tive a necessidade
            de efetuar uma única chamada a API, preferi não fazer o folder e
            arquivo para tratar diretamente dela, fazendo o tratamento de erro,
            controle de URLs e endpoints e etc, mas em projetos com mais
            chamadas, certamente essa estrutura seria necessária e seria criada
            e linkada com o redux.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
