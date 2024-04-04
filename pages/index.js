import dynamic from 'next/dynamic';
import "lowcoder-sdk/dist/style.css";

const LowcoderAppWrapper = dynamic(
  () => import('../components/LowcoderAppWrapper'), {ssr: false}
);

const LowcoderModuleWrapper = dynamic(
  () => import('../components/LowcoderModuleWrapper'), {ssr: false}
);

export default function Home() {
  return (
    <div style={{
      padding: '1rem',
    }}>
      
      <LowcoderAppWrapper
        appId='6555df30b100825d173060ef'
      />

      <LowcoderModuleWrapper
        appId="660f13367c18a91b174fe96d"
      />

    </div>
  );
}
