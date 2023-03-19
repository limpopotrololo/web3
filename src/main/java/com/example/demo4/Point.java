package com.example.demo4;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="Points")
public class Point implements Serializable {
    @Id
    @SequenceGenerator(name = "jpaSequence", sequenceName = "JPA_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name="x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name ="result")
    private String result;


    public Point() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }


    private boolean checkTriangle(){
        return x>=0 && y>=0 && y<=-x+r/2;
    }

    private boolean checkCircle(){
        return x<=0 && y>=0 && (x*x + y*y) < r*r/4;
    }

    private boolean checkSquare(){
        return x>=0 && y <=0 && x<=r && y >= -r;
    }
    public void isHit(){
        if (checkCircle() || checkSquare() || checkTriangle()) result = "HIT";
        else result = "MISS";
    }
}
