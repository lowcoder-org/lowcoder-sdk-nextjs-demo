import { useRef } from "react";
import { LowcoderAppView } from "lowcoder-sdk";

function LowcoderModuleWrapper(props) {
  const { appId } = props;
  const appRef = useRef();
  return (
    <section style={{marginTop: '2rem'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1>Lowcoder Module</h1>
        <button
          type="button"
          onClick={() => {
            appRef?.current?.invokeMethod("ShowNotification")
          }}
        >
          Invoke module method
        </button>
      </div>
      <LowcoderAppView
        ref={appRef}
        appId={appId}
        // baseUrl="http://localhost:3000"
      />
    </section>
  )
}

export default LowcoderModuleWrapper;