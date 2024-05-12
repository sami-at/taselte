@extends('adminlte::page')

@section('title', 'Products Management System | Create')

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
                        Add new Product
                    </h3>
                </div>
                <div class="card-body">
                    <form method="POST" class="mt-3" action="{{ route('products.store') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group mb-3">
                            <label for="name" class="form-label fw-bold">Name</label>
                            <input type="text" name="name" value="{{old("name")}}"class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="description">description</label>
                            <input type="text" class="form-control" value="{{old("description")}}"  name="description" >
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="price">Price</label>
                            <input type="number" name="price" value="{{old("price")}}" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="image">Image </label>
                            <input type="text" class="form-control" value="{{old("image")}}"   name="image">
                        </div>
                        
                        
                        <div class="form-group row mb-0">
                            <div class="col-md-8">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Create') }}
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

