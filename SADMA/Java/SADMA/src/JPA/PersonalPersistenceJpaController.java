/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JPA;

import JPA.exceptions.NonexistentEntityException;
import JPA.exceptions.PreexistingEntityException;
import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import persistence.PersonalPersistence;

/**
 *
 * @author francisco
 */
public class PersonalPersistenceJpaController implements Serializable {

    public PersonalPersistenceJpaController(EntityManagerFactory emf) {
        this.emf = emf;
    }
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void create(PersonalPersistence personalPersistence) throws PreexistingEntityException, Exception {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            em.persist(personalPersistence);
            em.getTransaction().commit();
        } catch (Exception ex) {
            if (findPersonalPersistence(personalPersistence.getIdPersonal()) != null) {
                throw new PreexistingEntityException("PersonalPersistence " + personalPersistence + " already exists.", ex);
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(PersonalPersistence personalPersistence) throws NonexistentEntityException, Exception {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            personalPersistence = em.merge(personalPersistence);
            em.getTransaction().commit();
        } catch (Exception ex) {
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                Integer id = personalPersistence.getIdPersonal();
                if (findPersonalPersistence(id) == null) {
                    throw new NonexistentEntityException("The personalPersistence with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(Integer id) throws NonexistentEntityException {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            PersonalPersistence personalPersistence;
            try {
                personalPersistence = em.getReference(PersonalPersistence.class, id);
                personalPersistence.getIdPersonal();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The personalPersistence with id " + id + " no longer exists.", enfe);
            }
            em.remove(personalPersistence);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public List<PersonalPersistence> findPersonalPersistenceEntities() {
        return findPersonalPersistenceEntities(true, -1, -1);
    }

    public List<PersonalPersistence> findPersonalPersistenceEntities(int maxResults, int firstResult) {
        return findPersonalPersistenceEntities(false, maxResults, firstResult);
    }

    private List<PersonalPersistence> findPersonalPersistenceEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(PersonalPersistence.class));
            Query q = em.createQuery(cq);
            if (!all) {
                q.setMaxResults(maxResults);
                q.setFirstResult(firstResult);
            }
            return q.getResultList();
        } finally {
            em.close();
        }
    }

    public PersonalPersistence findPersonalPersistence(Integer id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(PersonalPersistence.class, id);
        } finally {
            em.close();
        }
    }

    public int getPersonalPersistenceCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<PersonalPersistence> rt = cq.from(PersonalPersistence.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
