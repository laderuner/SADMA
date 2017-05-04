/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connections;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import persistence.LibroVueloPersistence;
import persistence.MaterialAeronauticPersistence;
import persistence.PersonalPersistence;

/**
 *
 * @author francisco
 */
public class ConnectionsFactory {
   
    /**
     * 
     * @return 
     */
    public EntityManagerFactory factoryPU() {
        EntityManagerFactory emfactory = null;
        emfactory = Persistence.createEntityManagerFactory("SADMAPU");
        return emfactory;
    }
    /**
     * 
     * @return 
     */
    public LibroVueloPersistence libroVueloPersistence() {
        LibroVueloPersistence lv = new LibroVueloPersistence();
        return lv;
    } 
    /**
     * 
     * @return 
     */
    public MaterialAeronauticPersistence MmterialAeronauticPersistence() {
        MaterialAeronauticPersistence ma = new MaterialAeronauticPersistence();
        return ma;
    }
    /**
     * 
     * @return 
     */
    public PersonalPersistence personalPersistence() {
        PersonalPersistence p = new PersonalPersistence();
        return p;
    } 
    
    
}
