@extends('adminlte::page')

@section('title', 'Products Management System | Update')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="row my-5">
                <div class="col-md-6 mx-auto">
                    @include('layouts.alert')
                </div>
            </div>
            <div class="card my-5">
                <div class="card-header bg-white text-center p-3">
                    <h3 class="text-dark">
                        Update product
                    </h3>
                </div>
                <div class="card-body">
                    <form method="POST" class="mt-3" action="{{ route('products.update',$product->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="form-group mb-3">
                            <label for="name" class="form-label fw-bold"> Name</label>
                            <input type="text" name="name" value="{{old("name",$product->name)}}" placeholder="name" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="description">description</label>
                            <input type="text" name="description" value="{{old("description",$product->description)}}"  placeholder="description" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="price">price</label>
                            <input type="text" class="form-control" value="{{old("price",$product->price)}}"  name="price" placeholder="Price">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="image">image</label>
                            <input type="text" class="form-control" value="{{old("hire_date",$product->image)}}"  placeholder="image" name="image">
                        </div>
                        
                        <div class="form-group row mb-0">
                            <div class="col-md-8">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

