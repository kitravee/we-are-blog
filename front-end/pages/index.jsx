import { useState } from 'react';
import PageLayout from 'src/components/PageLayout';
import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'src/hooks/useGetBlogsPages';
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import VerticalCard from 'src/components/VerticalCard';
import Banner from 'src/components/Banner';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import Button from '@material-ui/core/Button';
import HorizontalCard from 'src/components/HorizontalCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScrollTop from 'src/components/ScrollTop';

const useStyles = makeStyles((theme) =>
  createStyles({
    bloglist: {
      margin: theme.spacing(5, 0),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(10, 0),
      },
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    PageLayout: {
      position: 'relative',
    },
    loadmore: {
      margin: theme.spacing(3, 0),
    },
  }),
);

//! filter to support new feature
// eslint-disable-next-line no-unused-vars
export const BlogList = ({ data = [], filter, smUp }) => {
  return data.map((page) =>
    page.map((blog) => (
      <Grid key={blog.slug} item md={4} sm={6} xs={12}>
        {smUp ? (
          <VerticalCard
            author={blog?.author}
            date={blog?.date}
            image={blog?.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
            subtitle={blog?.subtitle}
            title={blog?.title}
          />
        ) : (
          <HorizontalCard
            author={blog.author}
            date={blog.date}
            image={blog.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
            subtitle={blog.subtitle}
            title={blog.title}
          />
        )}
      </Grid>
    )),
  );
};

export default function Home(props) {
  const { blogs } = props;
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [filter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });
  const { data, size, setSize, hitEnd, isValidating } = useGetBlogsPages({
    filter,
  });

  return (
    <PageLayout className={classes.PageLayout}>
      <Banner />
      <Container>
        <Grid container className={classes.bloglist} justify="center">
          <Grid container item xs={12}>
            <Typography
              gutterBottom
              color="primary"
              variant={smUp ? 'h3' : 'h5'}
            >
              MOST READ
            </Typography>
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            spacing={smUp ? 3 : 2}
            xs={12}
          >
            <BlogList data={data || [blogs]} filter={filter} smUp={smUp} />
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            className={classes.loadmore}
            justify="center"
            xs={12}
          >
            <Button
              disabled={isValidating || hitEnd}
              size="large"
              startIcon={
                isValidating && <CircularProgress size={16} color="secondary" />
              }
              variant="outlined"
              onClick={() => setSize(size + 1)}
            >
              Load More
            </Button>
          </Grid>
        </Grid>
      </Container>
      <ScrollTop>
        <Fab
          aria-label="scroll back to top"
          className={classes.fab}
          color="secondary"
          size="small"
        >
          <ArrowUpwardRoundedIcon className={classes.extendedIcon} />
        </Fab>
      </ScrollTop>
    </PageLayout>
  );
}

//? This function is called during the build (build time)
//? Provides props to your page
//? It will create static page
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });

  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 30,
  };
}
