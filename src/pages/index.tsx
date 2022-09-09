import HomeTemplate from 'templates/HomeTemplate'

export default function Page() {
  return <HomeTemplate />
}

export function getStaticProps() {
  return {
    props: {}
  }
}
