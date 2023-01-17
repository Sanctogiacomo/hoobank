import {clients} from "../constants";
import styles from "../styles";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap 
      w-full`}>
        {clients.map((client) =>(
          <div key={clients.id} className={
            `flex-1 ${styles.flexCenter} sm:w-[192px]
            min-w-[120px] hover:bg-white p-3`}>
            <img src={client.logo} alt={client.id} 
            className=" sm:w-[192px] w-[100px]
            object-contain "/>
          </div>
        ))}
      </div>
    </section>
  )

export default Clients