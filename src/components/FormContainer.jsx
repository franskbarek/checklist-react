

export default function FormContainer({ children }) {
  return (
    // <div style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }}>
    // <div  style={{
    //     background: '#999',
    //     padding: 15,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     flexWrap: 'wrap',
    //     borderRadius: 8
    // }}>
    <div className="flex items-center justify-center">
      <div className="bg-slate-400">{children}</div>
    </div>
  );
}
