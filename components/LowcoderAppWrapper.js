import { LowcoderAppView } from "lowcoder-sdk";

function LowcoderAppWrapper(props) {
  const { appId } = props;
  return (
    <section style={{marginTop: '2rem'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1>Lowcoder App</h1>
      </div>
      <LowcoderAppView
        appId={appId}
        // baseUrl="http://localhost:3000"
      />
    </section>
  )
}

export default LowcoderAppWrapper;