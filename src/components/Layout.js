import { Header } from "./Header";


export function Layout({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
 children,
}) {
  return (
    <div className="text-slate-700">
   
      <main>{children}</main>
     
    </div>
  );
}
